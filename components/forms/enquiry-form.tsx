"use client";

import type { ReactNode } from "react";
import { useActionState, useId } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { submitEnquiry } from "@/lib/enquiry/actions";
import {
  budgetRangeOptions,
  durationOptions,
  hotelPreferenceOptions,
  tripTypeOptions,
} from "@/lib/enquiry/options";
import {
  initialEnquiryState,
  type EnquiryDestinationOption,
  type EnquiryFormDefaults,
} from "@/lib/enquiry/schema";
import { isoDate } from "@/lib/format";
import { isDirectWhatsAppHref } from "@/lib/format";
import { cn } from "@/lib/utils";

type EnquiryFormProps = {
  variant?: "full" | "compact";
  destinations: EnquiryDestinationOption[];
  defaults?: EnquiryFormDefaults;
  whatsappHref: string;
  className?: string;
  id?: string;
};

function FieldError({
  id,
  errors,
}: {
  id: string;
  errors?: string[];
}) {
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
        {required ? (
          <span className="text-destructive"> *</span>
        ) : (
          <span className="sr-only"> (optional)</span>
        )}
      </label>
      {children}
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      <FieldError id={errorId} errors={errors} />
    </div>
  );
}

export function EnquiryForm({
  variant = "full",
  destinations,
  defaults = {},
  whatsappHref,
  className,
  id,
}: EnquiryFormProps) {
  const formId = useId();
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialEnquiryState,
  );
  const compact = variant === "compact";
  const minDate = isoDate();
  const selectedDestinations = new Set(defaults.destinations ?? []);
  if (defaults.destinationSlug) {
    selectedDestinations.add(defaults.destinationSlug);
  }

  const defaultWhatsappHref = whatsappHref;
  const successHref = state.whatsappHref ?? defaultWhatsappHref;

  return (
    <form
      id={id}
      action={formAction}
      noValidate
      className={cn(
        compact
          ? "rounded-2xl bg-card p-5 shadow-lg ring-1 ring-foreground/10 sm:p-6"
          : "rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/8 sm:p-6",
        className,
      )}
    >
      <div className="mb-5">
        <h2 className="font-heading text-2xl">
          {compact ? "Plan your Kashmir trip" : "Send an enquiry"}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          This is an enquiry, not a booking. We reply with a proposed itinerary
          for your dates.
        </p>
      </div>

      <div
        className="sr-only"
        aria-hidden="true"
      >
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          id={`${formId}-company`}
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <input type="hidden" name="source" value={defaults.source ?? (compact ? "homepage-hero" : "contact")} />
      <input type="hidden" name="packageSlug" value={defaults.packageSlug ?? ""} />
      <input type="hidden" name="packageName" value={defaults.packageName ?? ""} />
      <input type="hidden" name="destinationSlug" value={defaults.destinationSlug ?? ""} />
      <input type="hidden" name="destinationName" value={defaults.destinationName ?? ""} />

      {defaults.packageName ? (
        <p className="mb-4 rounded-xl bg-muted/70 px-3 py-2 text-sm">
          Package: <span className="font-medium">{defaults.packageName}</span>
        </p>
      ) : null}
      {defaults.destinationName ? (
        <p className="mb-4 rounded-xl bg-muted/70 px-3 py-2 text-sm">
          Destination:{" "}
          <span className="font-medium">{defaults.destinationName}</span>
        </p>
      ) : null}

      <div
        className={cn(
          "grid gap-4",
          compact ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2",
        )}
        aria-describedby={
          state.status === "error" ? `${formId}-form-error` : undefined
        }
      >
        <Field
          id={`${formId}-fullName`}
          label="Full name"
          required
          errorId={`${formId}-fullName-error`}
          errors={state.fieldErrors.fullName}
        >
          <input
            id={`${formId}-fullName`}
            name="fullName"
            type="text"
            autoComplete="name"
            required
            maxLength={80}
            defaultValue={defaults.fullName ?? ""}
            aria-invalid={Boolean(state.fieldErrors.fullName)}
            aria-describedby={
              state.fieldErrors.fullName ? `${formId}-fullName-error` : undefined
            }
            className="field-input font-normal"
          />
        </Field>

        <Field
          id={`${formId}-phone`}
          label="Phone number"
          required
          hint="Include country code, for example 91…"
          errorId={`${formId}-phone-error`}
          errors={state.fieldErrors.phone}
        >
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            defaultValue={defaults.phone ?? ""}
            aria-invalid={Boolean(state.fieldErrors.phone)}
            aria-describedby={`${formId}-phone-error`}
            className="field-input font-normal"
          />
        </Field>

        {compact ? null : (
          <>
            <Field
              id={`${formId}-whatsapp`}
              label="WhatsApp number"
              hint="Leave blank to use the same number as phone."
              errorId={`${formId}-whatsapp-error`}
              errors={state.fieldErrors.whatsapp}
            >
              <input
                id={`${formId}-whatsapp`}
                name="whatsapp"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                defaultValue={defaults.whatsapp ?? ""}
                aria-invalid={Boolean(state.fieldErrors.whatsapp)}
                aria-describedby={`${formId}-whatsapp-error`}
                className="field-input font-normal"
              />
            </Field>
            <Field
              id={`${formId}-email`}
              label="Email"
              errorId={`${formId}-email-error`}
              errors={state.fieldErrors.email}
            >
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                defaultValue={defaults.email ?? ""}
                aria-invalid={Boolean(state.fieldErrors.email)}
                aria-describedby={
                  state.fieldErrors.email ? `${formId}-email-error` : undefined
                }
                className="field-input font-normal"
              />
            </Field>
          </>
        )}

        <Field
          id={`${formId}-travelDate`}
          label="Travel date"
          errorId={`${formId}-travelDate-error`}
          errors={state.fieldErrors.travelDate}
        >
          <input
            id={`${formId}-travelDate`}
            name="travelDate"
            type="date"
            min={minDate}
            defaultValue={defaults.travelDate ?? ""}
            aria-invalid={Boolean(state.fieldErrors.travelDate)}
            className="field-input font-normal"
          />
        </Field>

        {compact ? (
          <input type="hidden" name="adults" value={defaults.adults ?? 2} />
        ) : (
          <Field
            id={`${formId}-adults`}
            label="Number of adults"
            required
            errorId={`${formId}-adults-error`}
            errors={state.fieldErrors.adults}
          >
            <input
              id={`${formId}-adults`}
              name="adults"
              type="number"
              inputMode="numeric"
              min={1}
              max={40}
              required
              defaultValue={defaults.adults ?? 2}
              aria-invalid={Boolean(state.fieldErrors.adults)}
              className="field-input font-normal"
            />
          </Field>
        )}

        {compact ? (
          <input type="hidden" name="children" value={defaults.children ?? 0} />
        ) : (
          <Field
            id={`${formId}-children`}
            label="Number of children"
            errorId={`${formId}-children-error`}
            errors={state.fieldErrors.children}
          >
            <input
              id={`${formId}-children`}
              name="children"
              type="number"
              inputMode="numeric"
              min={0}
              max={20}
              defaultValue={defaults.children ?? 0}
              aria-invalid={Boolean(state.fieldErrors.children)}
              className="field-input font-normal"
            />
          </Field>
        )}

        <Field
          id={`${formId}-tripType`}
          label="Trip type"
          required
          errorId={`${formId}-tripType-error`}
          errors={state.fieldErrors.tripType}
        >
          <select
            id={`${formId}-tripType`}
            name="tripType"
            required
            defaultValue={defaults.tripType ?? ""}
            aria-invalid={Boolean(state.fieldErrors.tripType)}
            className="field-input font-normal"
          >
            <option value="">Select trip type</option>
            {tripTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={`${formId}-duration`}
          label="Preferred duration"
          required
          errorId={`${formId}-duration-error`}
          errors={state.fieldErrors.duration}
        >
          <select
            id={`${formId}-duration`}
            name="duration"
            required
            defaultValue={defaults.duration ?? ""}
            aria-invalid={Boolean(state.fieldErrors.duration)}
            className="field-input font-normal"
          >
            <option value="">Select duration</option>
            {durationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {compact ? (
        <>
          <input type="hidden" name="whatsapp" value="" />
          <input type="hidden" name="email" value="" />
          <input type="hidden" name="hotelPreference" value="" />
          <input type="hidden" name="budgetRange" value="" />
          <input type="hidden" name="message" value="" />
        </>
      ) : (
        <div className="mt-4 grid gap-4">
          <fieldset className="grid gap-2">
            <legend className="text-sm font-medium">Destinations</legend>
            <p className="text-xs text-muted-foreground">
              Choose the places you want to include. Leave blank if you are not
              sure yet.
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
                    defaultChecked={selectedDestinations.has(destination.slug)}
                    className="size-4 accent-primary"
                  />
                  {destination.name}
                </label>
              ))}
            </div>
            <FieldError
              id={`${formId}-destinations-error`}
              errors={state.fieldErrors.destinations}
            />
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id={`${formId}-hotelPreference`}
              label="Hotel preference"
              errorId={`${formId}-hotel-error`}
              errors={state.fieldErrors.hotelPreference}
            >
              <select
                id={`${formId}-hotelPreference`}
                name="hotelPreference"
                defaultValue={defaults.hotelPreference ?? ""}
                className="field-input font-normal"
              >
                <option value="">To be discussed</option>
                {hotelPreferenceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field
              id={`${formId}-budgetRange`}
              label="Budget range"
              errorId={`${formId}-budget-error`}
              errors={state.fieldErrors.budgetRange}
            >
              <select
                id={`${formId}-budgetRange`}
                name="budgetRange"
                defaultValue={defaults.budgetRange ?? ""}
                className="field-input font-normal"
              >
                <option value="">To be discussed</option>
                {budgetRangeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field
            id={`${formId}-message`}
            label="Message"
            errorId={`${formId}-message-error`}
            errors={state.fieldErrors.message}
          >
            <textarea
              id={`${formId}-message`}
              name="message"
              rows={4}
              maxLength={2000}
              defaultValue={defaults.message ?? ""}
              className="field-input min-h-24 py-2 font-normal"
            />
          </Field>
        </div>
      )}

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
          <p
            className="rounded-xl bg-secondary px-3 py-2 text-sm"
            role="status"
          >
            {state.message}
          </p>
        ) : null}

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            type="submit"
            size="xl"
            disabled={pending}
            className="w-full sm:w-auto"
          >
            {pending ? "Sending…" : compact ? "Get Quote" : "Enquire Now"}
          </Button>
          {isDirectWhatsAppHref(successHref) ? (
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
