import { UserName, DetailsList, ActionsList, AppsTitle } from "../UserSidebarStyles";

import bookIcon from "../../assets/images/icons/book-icon.svg";
import photoIcon from "../../assets/images/icons/photo-icon.svg";
import plusIcon from "../../assets/images/icons/plus-icon.svg";
import sunnyIcon from "../../assets/images/icons/sunny-icon.svg";
import toDoListIcon from "../../assets/images/icons/to-do-list-icon.svg";
import userUpdateIcon from "../../assets/images/icons/user-update-icon.svg";
import userIcon from "../../assets/images/icons/user-icon.svg";
import videoIcon from "../../assets/images/icons/video-icon.svg";
import wrenchIcon from "../../assets/images/icons/wrench-icon.svg";

function User(props) {
    return <UserName>{props.name}</UserName>;
}

function UserDetailsList() {
    const details = ["masculino", "casado", "Brasil"];

    return (
        <DetailsList>
            {details.map((item, key) => {
                return <li key={key}>{item}</li>;
            })}
        </DetailsList>
    );
}

function UserActionsListOne() {
    const userMenuActionsOne = [
        { icon: userIcon, title: "Perfil" },
        { icon: bookIcon, title: "Recados" },
        { icon: photoIcon, title: "Fotos" },
        { icon: videoIcon, title: "Vídeos" },
        { icon: sunnyIcon, title: "Depoimentos" },
    ];

    return (
        <ActionsList>
            {userMenuActionsOne.map((item, key) => {
                const editLink =
                    item.icon == "userIcon"
                        ? '<a className="edit-perfil" href="#" title="Editar perfil do usuário">editar</a>'
                        : "";
                return (
                    <li key={key}>
                        <img src={item.icon.src} alt={item.title} />
                        <a href="#" title={item.title}>
                            {item.title}
                        </a>
                        {editLink}
                    </li>
                );
            })}
        </ActionsList>
    );
}

function UserActionsListTwo() {
    const userMenuActionsTwo = [
        { icon: toDoListIcon, title: "Listas" },
        { icon: wrenchIcon, title: "Configurações" },
        { icon: userUpdateIcon, title: "Atualizações" },
    ];

    return (
        <ActionsList>
          {
            userMenuActionsTwo.map((item, key) => {
                return (
                    <li key={key}>
                        <img src={item.icon.src} alt={item.title} />
                        <a href="#" title={item.title}>
                            {item.title}
                        </a>
                    </li>
                );
            })
          }
        </ActionsList>
    );
}

function UserApps(){

  return(
    <>
      <AppsTitle>Apps</AppsTitle>
      <ActionsList>
        <li>
          <img src={plusIcon.src} alt="Adicionar App" />
          <a href="#" title="Adicionar App">Adicionar App</a>
        </li>                                   
      </ActionsList>
    </>
  )
}

export { User, UserDetailsList, UserApps, UserActionsListOne, UserActionsListTwo };
