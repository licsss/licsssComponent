import React from "react";
import { ResponseType } from "../../../functions";
export interface FeedbackProps extends React.PropsWithChildren {
    validMessage?: React.ReactElement | string;
    invalidMessage?: React.ReactElement | string;
    name?: string;
}
export default function Feedback(props: FeedbackProps): React.ReactElement;
export interface FeedbackContextInterface {
    name: string;
    invalidMessages: string[] | false;
}
export interface UseFeedback extends FeedbackContextInterface {
    changeInvalidMessages: (props: string[] | false) => void;
    changeResponse: (props: ResponseType<object, {
        [key: string]: string[];
    }> | undefined) => void;
}
export declare const FeedbackContext: React.Context<UseFeedback>;
export declare function useFeedback(props: FeedbackContextInterface): UseFeedback;
