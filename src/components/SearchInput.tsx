import { Search } from "lucide-react";
import Form from "next/form";

function SearchInput() {
  return (
    <Form action="/search" className="relative w-full flex-1 max-w-[300px]">
      <input
        type="text"
        name="term"
        placeholder="Search courses..."
        className="w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
      />
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
    </Form>
  );
}

export default SearchInput;
