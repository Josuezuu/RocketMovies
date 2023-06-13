import { Container, Profile, Brand, UserNameText} from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';
import avatarPlaceholder from "../../assets/doge.png"
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../Input';
import {FiSearch} from 'react-icons/fi';
import { useEffect, useState } from "react";



export function Header(props) {
  const {search, setSearch, handleChange} = props;
  const {signOut, user} = useAuth();
  const navigate = useNavigate();
  function handleSignOut(){
    navigate('/');
    signOut();
  }

  const avatarUrl = user?.avatar ? `${api.defaults.baseURL}/files/${user?.avatar}` : avatarPlaceholder;



  return (
    <Container>
      <Brand>
      <h1>RocketMovies</h1>
      </Brand>
        <Input
          placeholder="Pesquise pelo título"
          icon={FiSearch} 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <UserNameText>
        <div>
          <strong>{user?.name}</strong>
        </div>
        <Link  onClick={handleSignOut}>Sair</Link>
        </UserNameText>
      <Profile to="/profile">
        <img src={avatarUrl}
        alt={user?.name}/>

      </Profile>

    </Container>
  );
}

