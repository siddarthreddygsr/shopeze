import { Navbar, Typography, IconButton, Button, Input } from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { createContext, useState } from 'react';
 
export const queryContext = createContext({ query: "", setQuery: () => {} });

function Navigation() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Performing search with query:", query);
  };

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 px-5">
      <div className="flex flex-wrap items-center justify-between gap-y-4">
        <Typography
          as="a"
          href="#"
          variant="h4"
          className="mr-4 ml-2 cursor-pointer py-1.5 text-black"
        >
          Shopeeze
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text">
            <Cog6ToothIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text">
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <queryContext.Provider value={{ query, setQuery }}>
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="black"
              label="Type here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              color="black"
              className="!absolute right-1 top-1 rounded"
              onClick={handleSearch} // Remove the curly braces
            >
              Search
            </Button>
          </div>
        </queryContext.Provider>
      </div>
    </Navbar>
  );
}

export default Navigation;
