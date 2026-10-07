"use client";

import type { ReactNode } from "react";
import { useActionState, useId } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { submitCorporateEnquiry } from "@/lib/corporate/actions";
import {
  corporateBudgetOptions,
  corporateHotelOptions,
  corporateNightOptions,
  corporateTransportOptions,
} from "@/lib/corporate/options";
import { initialCorporateEnquiryState } from "@/lib/corporate/schema";
import type { EnquiryDestinationOption } from "@/lib/enquiry/schema";
import { isoDate, isDirectWhatsAppHref } from "@/lib/format";

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) {
    return null;
  }

  return (
    <p id={id} className="text-xs text-destructive" role="alert">
      {errors[0]}
    </p>
  );
}

function Field({
  id,
  label,
  hint,
  errorId,
  errors,
  required,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  errorId: string;
  errors?: string[];
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required ? <span className="text-destructive"> *</span> : (
          <span className="sr-only"> (optional)</span>
        )}
      </label>
      {children}
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      <FieldError id={errorId} errors={errors} />
    </div>
  );
}

export function CorporateEnquiryForm({
  destinations,
  whatsappHref,
}: {
  destinations: EnquiryDestinationOption[];
  whatsappHref?: string;
}) {
  const formId = useId();
  const [state, formAction, pending] = useActionState(
    submitCorporateEnquiry,
    initialCorporateEnquiryState,
  );
  const successHref = state.whatsappHref ?? whatsappHref;
  const minDate = isoDate();

  return (
    <form
      id="corporate-enquiry-form"
      action={formAction}
      noValidate
      className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/8 sm:p-6"
    >
      <div className="mb-5">
        <h2 id="enquiry" className="scroll-mt-28 font-heading text-2xl">
          Corporate enquiry
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          This is an enquiry, not a booking. We reply with a proposed itinerary
          and a quotation for your dates. Do not send passwords, ID scans, or
          payment details here.
        </p>
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="source" value="corporate-travel" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id={`${formId}-companyName`}
          label="Company name"
          required
          errorId={`${formId}-company-error`}
          errors={state.fieldErrors.companyName}
        >
          <input
            id={`${formId}-companyName`}
            name="companyName"
            autoComplete="organization"
            required
            className="field-input font-normal"
            aria-invalid={Boolean(state.fieldErrors.companyName)}
          />
        </Field>
        <Field
          id={`${formId}-contactPerson`}
          label="Contact person"
          required
          errorId={`${formId}-contact-error`}
          errors={state.fieldErrors.contactPerson}
        >
          <input
            id={`${formId}-contactPerson`}
            name="contactPerson"
            autoComplete="name"
            required
            className="field-input font-normal"
            aria-invalid={Boolean(state.fieldErrors.contactPerson)}
          />
        </Field>
        <Field
          id={`${formId}-email`}
          label="Work email"
          required
          errorId={`${formId}-email-error`}
          errors={state.fieldErrors.email}
        >
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            className="field-input font-normal"
            aria-invalid={Boolean(state.fieldErrors.email)}
          />
        </Field>
        <Field
          id={`${formId}-phone`}
          label="Phone"
          required
          errorId={`${formId}-phone-error`}
          errors={state.fieldErrors.phone}
        >
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="field-input font-normal"
            aria-invalid={Boolean(state.fieldErrors.phone)}
          />
        </Field>
        <Field
          id={`${formId}-employeeCount`}
          label="Number of employees travelling"
          required
          hint="Travelling headcount. What we can confirm depends on dates and rooms — this is not a capacity claim."
          errorId={`${formId}-employees-error`}
          errors={state.fieldErrors.employeeCount}
        >
          <input
            id={`${formId}-employeeCount`}
            name="employeeCount"
            type="number"
            min={2}
            max={200}
            required
            defaultValue={10}
            className="field-input font-normal"
            aria-invalid={Boolean(state.fieldErrors.employeeCount)}
          />
        </Field>
        <Field
          id={`${formId}-travelDate`}
          label="Travel dates"
          errorId={`${formId}-date-error`}
          errors={state.fieldErrors.travelDate}
        >
          <input
            id={`${formId}-travelDate`}
            name="travelDate"
            type="date"
            min={minDate}
            className="field-input font-normal"
          />
        </Field>
        <Field
          id={`${formId}-nights`}
          label="Number of nights"
          errorId={`${formId}-nights-error`}
          errors={state.fieldErrors.nights}
        >
          <select
            id={`${formId}-nights`}
            name="nights"
            defaultValue=""
            className="field-input font-normal"
          >
            <option value="">Select nights</option>
            {corporateNightOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field
          id={`${formId}-hotelCategory`}
          label="Hotel category"
          errorId={`${formId}-hotel-error`}
          errors={state.fieldErrors.hotelCategory}
        >
          <select
            id={`${formId}-hotelCategory`}
            name="hotelCategory"
            defaultValue=""
            className="field-input font-normal"
          >
            <option value="">To be discussed</option>
            {corporateHotelOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field
          id={`${formId}-transportation`}
          label="Transportation requirement"
          errorId={`${formId}-transport-error`}
          errors={state.fieldErrors.transportation}
        >
          <select
            id={`${formId}-transportation`}
            name="transportation"
            defaultValue=""
            className="field-input font-normal"
          >
            <option value="">To be discussed</option>
            {corporateTransportOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field
          id={`${formId}-budgetRange`}
          label="Estimated budget"
          errorId={`${formId}-budget-error`}
          errors={state.fieldErrors.budgetRange}
        >
          <select
            id={`${formId}-budgetRange`}
            name="budgetRange"
            defaultValue=""
            className="field-input font-normal"
          >
            <option value="">To be discussed</option>
            {corporateBudgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-4 grid gap-2">
        <legend className="text-sm font-medium">Preferred destinations</legend>
        <p className="text-xs text-muted-foreground">
          Choose the places you want to include. Leave blank if you want us to
          propose a circuit.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {destinations.map((destination) => (
            <label
              key={destination.slug}
              className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2 text-sm"
            >
              <input
                type="checkbox"
                name="destinations"
                value={destination.slug}
                className="size-4 accent-primary"
              />
              {destination.name}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-4">
        <Field
          id={`${formId}-message`}
          label="Requirements / message"
          errorId={`${formId}-message-error`}
          errors={state.fieldErrors.message}
        >
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={4}
            maxLength={2000}
            className="field-input min-h-24 py-2 font-normal"
            placeholder="Team mix, room sharing, meals, or anything we should not assume."
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-3">
        {state.status === "error" ? (
          <p
            id={`${formId}-form-error`}
            className="rounded-xl bg-destructive/10 px-3 py-2 text-sm text-destructive"
            role="alert"
          >
            {state.message}
          </p>
        ) : null}
        {state.status === "success" ? (
          <p className="rounded-xl bg-secondary px-3 py-2 text-sm" role="status">
            {state.message}
          </p>
        ) : null}

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button type="submit" size="xl" disabled={pending} className="w-full sm:w-auto">
            {pending ? "Sending…" : "Request a Quote"}
          </Button>
          {successHref && isDirectWhatsAppHref(successHref) ? (
            <ButtonLink
              href={successHref}
              variant="whatsapp"
              size="xl"
              className="w-full sm:w-auto"
            >
              <MessageCircle data-icon="inline-start" />
              WhatsApp Us
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </form>
  );
}
