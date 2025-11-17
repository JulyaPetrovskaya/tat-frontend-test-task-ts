import { createContext, useContext, useState } from "react";
import type { SearchResultState } from "../types/search";

type SearchContextType = {
  searchResults: Record<string, SearchResultState>;
  setSearchResults: React.Dispatch<
    React.SetStateAction<Record<string, SearchResultState>>
  >;
  activeCountryId: string | null;
  setActiveCountryId: React.Dispatch<React.SetStateAction<string | null>>;
};

// створення контексту з початковим значенням undefined
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// провайдер контексту, який обгортає частину додатку
export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchResults, setSearchResults] = useState<
    Record<string, SearchResultState>
  >({});
  const [activeCountryId, setActiveCountryId] = useState<string | null>(null);

  return (
    <SearchContext.Provider
      value={{ searchResults, setSearchResults, activeCountryId, setActiveCountryId }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// кастомний хук для використання контексту
export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error("useSearch must be used inside SearchProvider");
  }
  return ctx;
};
