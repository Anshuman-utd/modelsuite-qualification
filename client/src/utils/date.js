export const fmtDate = (raw) => {
  if (!raw) return "—";

  try {
    const d = new Date(raw);

    if (isNaN(d)) return raw;

    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return raw;
  }
};