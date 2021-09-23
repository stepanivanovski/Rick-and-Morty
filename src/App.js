import Button from './components/base/Button';
import ThemeChanging from './components/ThemeChanging'
import Input from './components/base/Input';

function App() {
  return (
    <div className="App">
        <ThemeChanging/>
        <Button label={"Создать"}/>
        <Input 
          type={"text"} 
          title={"Имя"}/>
        <Input 
          type={"text"} 
          title={"Фамилия"}/>
        <Input 
          type={"text"} 
          title={"Отчество"}/>  
    </div>
  );
}
export default App;
