import React from "react";
import RabotyagiHeader from "../../components/body/rabotyagi-header/rabotyagi-header";
import RabotyagiTable from "../../components/body/rabotyagi-table/rabotyagi-table";
import Header from "../../templates/header/header";
import LeftMenu from "../../templates/left-menu/left-menu";
import LeftMenuItems from "../../templates/left-menu/left-menu-items/left-menu-items";
import MainContainer from "../../templates/main-container/main-container";
import styles from "./rabotyagi.module.scss";
import ProfileMenu from "../../components/header/profile-menu/profile-menu";
import Search from "../../components/header/search/search";
import { filterByName } from "../../store/state";

function RabotyagiPage() {
    return (
        <div className={styles.app}>
            <LeftMenu>
                <LeftMenuItems />
            </LeftMenu>
            <Header
                left={<div />}
                right={
                    <>
                        <Search filterHandler={filterByName} />
                        <ProfileMenu />
                    </>
                }
            />
            <MainContainer className={styles.main}>
                <RabotyagiHeader />
                <RabotyagiTable />
            </MainContainer>
        </div>
    );
}

export default RabotyagiPage;
