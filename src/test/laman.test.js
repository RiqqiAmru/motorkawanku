// menampilkan suspense ketika load pertama
import { it, expect } from "vitest";

it("should show loading spinner when loading for the first time", async () => {
  const { getByText } = render(<Laman />);
  expect(getByText("Loading...")).toBeTruthy();
});
