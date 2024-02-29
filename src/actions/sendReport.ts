import { Report } from "../types";

export async function sendReport(report: Report) {
  console.log(report);
  console.log(JSON.parse(localStorage.getItem("user"))?.accessToken);
  try {
    const res = await fetch(
      "https://turingsec-production.up.railway.app/api/bug-bounty-reports/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user"))?.accessToken
          }`,
        },
        body: JSON.stringify(report),
      }
    );
    console.log(res);
    if (!res.ok) {
      console.log(res);
      throw new Error("Wrong response");
    }

    return res;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message);
  }
}
