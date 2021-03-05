import React from "react";
import DairyHeader from "../../components/body/dairy-header/dairy-header";
import DairyTable from "../../components/body/dairy-table/dairy-table";
import Header from "../../templates/header/header";
import LeftMenu from "../../templates/left-menu/left-menu";
import LeftMenuItems from "../../templates/left-menu/left-menu-items/left-menu-items";
import MainContainer from "../../templates/main-container/main-container";
import styles from "./dairys.module.scss";
import TopNavigation from "../../components/header/top-navigation/top-navigation";
import ProfileMenu from "../../components/header/profile-menu/profile-menu";
import Search from "../../components/header/search/search";
import { filterByUser } from "../../store/state";

function DairysPage(props) {
    const path = props.location.pathname;
    return (
        <div className={styles.app}>
            <LeftMenu>
                <LeftMenuItems />
            </LeftMenu>
            <Header
                left={<TopNavigation />}
                right={
                    <>
                        <Search filterHandler={filterByUser} />
                        <ProfileMenu />
                    </>
                }
            />
            <MainContainer className={styles.main}>
                <DairyHeader />
                <DairyTable path={path} />
            </MainContainer>
        </div>
    );
}

export default DairysPage;
