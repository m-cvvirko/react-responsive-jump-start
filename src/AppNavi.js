import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    margin: 'auto',
  }
}));

const HeaderNavi = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root} >
      <ul className='links-list'>
        <li className='nav-item'>
          <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/about'>About</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNavi;
