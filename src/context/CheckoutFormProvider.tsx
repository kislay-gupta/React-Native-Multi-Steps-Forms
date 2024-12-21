import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { router } from "expo-router";
export const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: "Full name is required!" })
    .min(1, { message: "Full name must be longer than 1" }),
  address: z.string().min(1, { message: "Please provide your address!" }),
  city: z.string().min(1, { message: "City is required!" }),
  postCode: z.string().min(1, { message: "Postal code is required!" }),
  country: z.string().length(2),
  phoneNo: z.string().min(1, { message: "Phone is required!" }),
  birthDate: z.date(),
});
export const PaymentDetailsSchema = z.object({
  cardNo: z
    .string({ message: "please enter a valid number" })
    .length(10, { message: "please enter a 10 digit value" }),
  expires: z
    .string({ message: "please enter a valid date" })
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/),
  cvv: z.coerce
    .number({ message: "please enter a valid cvv" })
    .min(1000)
    .max(9999),
  saveCard: z.boolean().optional(),
  switchValue: z.boolean().optional(),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
export type PaymentForm = z.infer<typeof PaymentDetailsSchema>;
type CheckoutFormContext = {
  personalInfo: PersonalInfo | undefined;
  setPersonalInfo: (val: PersonalInfo | undefined) => void;
  paymentInfo: PaymentForm | undefined;
  setPaymentInfo: (val: PaymentForm | undefined) => void;
  onSubmit: () => void;
};
const CheckoutFormContext = createContext<CheckoutFormContext>({
  personalInfo: undefined,
  setPersonalInfo: () => {},
  paymentInfo: undefined,
  setPaymentInfo: () => {},
  onSubmit: () => {},
});
export default function CheckoutFormProvider({ children }: PropsWithChildren) {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | undefined>();
  const [paymentInfo, setPaymentInfo] = useState<PaymentForm | undefined>();
  const onSubmit = () => {
    if (!personalInfo || !paymentInfo) {
      console.log("form was not complete");
      return;
    }
    setPersonalInfo(undefined);
    setPaymentInfo(undefined);
    router.dismissAll();
    router.back();
  };
  return (
    <CheckoutFormContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        paymentInfo,
        setPaymentInfo,
        onSubmit,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
}

export const useCheckoutForm = () => useContext(CheckoutFormContext);
