import { useMutation } from "react-query";
import { sendReport } from "../actions/sendReport";
import { Report } from "../types";

export function useSendReport() {
  return useMutation((report: Report) => sendReport(report));
}
