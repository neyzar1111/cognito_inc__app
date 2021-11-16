import StyledSection from "../styles/StyledSection";
import React from "react";

interface Props {
    "title": string,
}

const SectionWrapper: React.FC <Props> = ({children, title}) => (
    <StyledSection>
        <div className="section__inner">
            <div className="section__top">
                <h2 className="section__heading">
                    <span>{title}</span>
                </h2>
            </div>
            {children}
        </div>
    </StyledSection>
);

export default SectionWrapper;