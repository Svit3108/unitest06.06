import React from 'react';
import ThemeProvider from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>Rezepte App</h1>
          <ThemeSwitcher />
        </header>
        <main>
          <RecipeList />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;

