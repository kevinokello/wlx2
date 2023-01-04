/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React, { Fragment } from 'react'
import Header from './header/header';
import Footer from './footer/footer';
import ChatwootWidget from '../components/ChatwootWidget'

export default function Layout({ children }) {
  return (
    
    <Flex
      sx={{
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
    
      <Header />
      <ChatwootWidget />
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
        
      </main>
     
      <Footer />
      
    </Flex>
    
  );
}
