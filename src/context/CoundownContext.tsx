import { createContext, ReactNode } from "react";

interface CoundownContextData {

}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const CoundownContext = createContext({} as CoundownContextData)

export function CoundownProvider({children} : ChallengesProviderProps) {
  return (
    <CoundownContext.Provider
    value={{

    }}
    >
      {children}
    </CoundownContext.Provider>
  )
}

