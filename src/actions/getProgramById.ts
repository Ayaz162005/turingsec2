export async function getProgramById(id: string) {
  try {
    console.log(id);
    const res = await fetch(
      `https://turingsec-production.up.railway.app/api/bug-bounty-programs/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Wrong response");
    }
    const data = await res.json();
    return data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message);
  }
}
