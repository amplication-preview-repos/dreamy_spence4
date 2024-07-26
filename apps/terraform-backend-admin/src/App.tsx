import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { SnapshotList } from "./snapshot/SnapshotList";
import { SnapshotCreate } from "./snapshot/SnapshotCreate";
import { SnapshotEdit } from "./snapshot/SnapshotEdit";
import { SnapshotShow } from "./snapshot/SnapshotShow";
import { EnvironmentList } from "./environment/EnvironmentList";
import { EnvironmentCreate } from "./environment/EnvironmentCreate";
import { EnvironmentEdit } from "./environment/EnvironmentEdit";
import { EnvironmentShow } from "./environment/EnvironmentShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { StateList } from "./state/StateList";
import { StateCreate } from "./state/StateCreate";
import { StateEdit } from "./state/StateEdit";
import { StateShow } from "./state/StateShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Terraform Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Snapshot"
          list={SnapshotList}
          edit={SnapshotEdit}
          create={SnapshotCreate}
          show={SnapshotShow}
        />
        <Resource
          name="Environment"
          list={EnvironmentList}
          edit={EnvironmentEdit}
          create={EnvironmentCreate}
          show={EnvironmentShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="State"
          list={StateList}
          edit={StateEdit}
          create={StateCreate}
          show={StateShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
