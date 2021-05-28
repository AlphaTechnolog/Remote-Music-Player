import React, { useState, useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { globalContext } from '../context/global';
import client from '../client';

const Search = () => {
  const [search, setSearch] = useState('');
  const { path, setContent, setLoading } = useContext(globalContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (search === '') {
        setContent((await client.getContent(path)));
      } else {
        try {
          setContent({
            directories: (await client.getContent(path)).directories.filter((dirent) => (
              new RegExp(search, 'g').test(dirent)
            )),
            files: (await client.getContent(path)).files.filter((file) => (
              new RegExp(search, 'g').test(file)
            )),
          });
        } catch (err) {
          console.error(err.message);
        }
      }
      setLoading(false);
    })();
    // eslint-disable-next-line
  }, [search]);

  return (
    <>
      <div className="mx-3">
        <Form.Group controlId="search">
          <Form.Label>Search (Regular expresion)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the search pattern"
            onChange={handleChange}
          />
        </Form.Group>
      </div>
    </>
  )
}

export default Search
