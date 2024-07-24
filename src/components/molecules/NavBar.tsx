import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Section } from "../atoms/section";
import { ButtonOutlet, ButtonIcon, ButtonOptions } from "../atoms/button";
import { AvatarDropdown } from "../organisms/AvatarDropdown";
import { CameraCapture } from "../organisms/CameraCapture";
import { Modal } from "../organisms/Modal";
import { UserInfo } from "../../types/user";
import { logOut } from "../../services/auth";
import { FaCameraRetro } from "react-icons/fa";

type Props = {
  user_info: UserInfo;
};

export const NavBar: React.FC<Props> = ({ user_info }) => {
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()

  return (
    <Section className="mx-auto container flex ">
      <Section className="w-5/6 flex content-center gap-2">
        <ButtonIcon
          icon={FaCameraRetro}
          text="Captura y Comparte!"
          onClick={() => setOpenModal(!openModal)}
        />
        <ButtonOutlet text="Gallery" onClick={() => navigate('/home')} />
        <ButtonOutlet text="My photos" onClick={() => alert("abrir camara")} />
      </Section>
      <Section className="flex w-1/6 content-end justify-end gap-2">
        <AvatarDropdown
          imgUrl={user_info.photoURL ?? ""}
          fullname={user_info.displayName ?? ""}
          options={[
            <ButtonOptions text="Cerrar sesión" onClick={logOut} />
          ]}
        />
      </Section>
      {openModal && <Modal setOpenModal={setOpenModal} title="Comparte este momento con nosotros!">
        <CameraCapture />
      </Modal>}
    </Section>
  );
};
