import {writeToScreen, changeH1} from './test' ;
import './styles.css' ;

writeToScreen();

changeH1("Its a man's world!!!");

if(module && module.hot) module.hot.accept()