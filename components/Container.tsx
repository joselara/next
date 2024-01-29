import React, { ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode; 
}

const OuterContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        {children}
      </div>
    </div>
  );
};
  
const InnerContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative px-4 sm:px-8 lg:px-12">
      <div className="mx-auto">
        {children}
      </div>
    </div>
  );
};  

const Container: React.FC<ContainerProps> = ({ children }) => (
  <OuterContainer>
    <InnerContainer>
      {children}
    </InnerContainer>
  </OuterContainer>
);

export {
  OuterContainer,
  InnerContainer,
  Container
}