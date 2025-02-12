//"use client";
//import React, { useState, createContext, useContext } from "react";

//type GlobalContextProviderProps = {
//	children: React.ReactNode;
//};

//type GlobalDataType = {
//	selectedItemPrice: number;
//	setSelectedItemPrice: React.Dispatch<React.SetStateAction<number>>;
//};

//const defaultGlobalContextValue: GlobalDataType = {
//	selectedItemPrice: 0,
//	setSelectedItemPrice: () => {},
//};

//const GlobalContext = createContext<GlobalDataType>(defaultGlobalContextValue);

//export default function GlobalContextProvider({
//	children,
//}: GlobalContextProviderProps) {
//	const [selectedItemPrice, setSelectedItemPrice] = useState<number>(0);

//	const contextValue: GlobalDataType = {
//		selectedItemPrice,
//		setSelectedItemPrice,
//	};

//	return (
//		<GlobalContext.Provider value={contextValue}>
//			{children}
//		</GlobalContext.Provider>
//	);
//}

//export function useGlobalContext() {
//	const context = useContext(GlobalContext);

//	if (!context) {
//		console.warn("useGlobalContext must be used within GlobalContextProvider");
//	}

//	return context || defaultGlobalContextValue;
//}
