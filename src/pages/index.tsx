import { Auth, Button, IconLogOut } from "@supabase/ui";
import type { ReactNode } from "react"
import React from "react"
import { LayoutWrapper } from "src/components/layoutWrapper";
import { client } from "src/libs/supabase";

type Props = {
  children: ReactNode;
};

const Container = (props: Props) => {
  const {user} = Auth.useUser();

  // ログインしている場合
  if (user) {
    return (
      <div>
        <div className="flex justify-end mx-2 my-4">
          <Button size="medium" icon={<IconLogOut />} onClick={() => client.auth.signOut()} >
            Sign out
          </Button>
        </div>
      </div>
    );
  }
  // ログインしてない
  return <>{props.children}</>
};

const Home = () => {
  return (
    <LayoutWrapper>
      <Auth.UserContextProvider supabaseClient={client}>
        <Container>
          <div className="rounded border-4 border-indigo-500/100">
          aaaa
          </div>
        </Container>
      </Auth.UserContextProvider>
    </LayoutWrapper>
  );
};

export default Home;
