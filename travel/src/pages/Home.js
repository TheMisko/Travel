import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Transition } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import { FETCH_POSTS_QUERY } from "../utils/graphql";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [opis, setOpis] = useState("");
  console.log(opis);
  const {
    loading,
    data: { getPosts: posts }
  } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          <Transition.Group>
            {posts &&
              posts.map(post => (
                <div onClick={() => setOpis(post.opis)}>
                  <h1>{post.naziv}</h1>
                  <p>{post.opis}</p>
                  {post.slike.map(slika => (
                    <h5>{slika}</h5>
                  ))}{" "}
                  <h4>{post.cena}</h4>
                </div>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Home;
