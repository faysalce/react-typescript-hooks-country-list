import React from "react"
import { StyledPlaceHolderLoader, StyledPlaceHolderLoaderItem, StyledPlaceHolderLoaderItemAnimation } from "./StyledPlaceHolderLoader"

export default function PlaceHolderLoader() {
    return (
        <>
            <StyledPlaceHolderLoader>
                <StyledPlaceHolderLoaderItem>
                    <StyledPlaceHolderLoaderItemAnimation />
                </StyledPlaceHolderLoaderItem>
                <StyledPlaceHolderLoaderItem>
                    <StyledPlaceHolderLoaderItemAnimation />
                </StyledPlaceHolderLoaderItem>
                <StyledPlaceHolderLoaderItem>
                    <StyledPlaceHolderLoaderItemAnimation />
                </StyledPlaceHolderLoaderItem>
                <StyledPlaceHolderLoaderItem>
                    <StyledPlaceHolderLoaderItemAnimation />
                </StyledPlaceHolderLoaderItem>
            </StyledPlaceHolderLoader>
        </>
    )
}