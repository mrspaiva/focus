import { createContext } from "react";

interface CoundownContextData {

}

export const CoundownContext = createContext({} as CoundownContextData)

export function CoundownProvider({children}) {
  return (
    <CoundownContext.Provider
    value={{

    }}
    >
      {children}
    </CoundownContext.Provider>
  )
}

