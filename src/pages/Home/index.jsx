import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import {FiPlus, FiSearch} from 'react-icons/fi';
import {Container, Menu, Search, Content, NewNote, SubHeader} from './styles';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {ButtonText} from '../../components/ButtonText';
import {Button} from '../../components/Button';
import {Section} from '../../components/Section';
import {Note} from '../../components/Note';

export function Home(){
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleTagSelection(tagName){
    if(tagName === 'all'){
      return setTagsSelected([]);
    }
    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {

      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  function  handleDetails(id){
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  },[]);

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(response.data);
    }
    fetchNotes();
  },[tagsSelected, search]);

  return (
    <Container>

      <Header />
     <SubHeader>
        <h1>Meus filmes</h1>
         <NewNote to="/new">
          <FiPlus />
          Adicionar filme

      </NewNote>
      </SubHeader>
      <Content></Content>
        
    </Container>
  )
}