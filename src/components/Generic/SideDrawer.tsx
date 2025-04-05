import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Divider,
} from "@heroui/react";
import AlertPopUp from "./AlertPopUp";

interface SideDrawerProps{
  title: string;
  content: any;
  isOpen: boolean;
  handleClose: () => void;
}
export default function SideDrawer({ title, content, handleClose, isOpen }: SideDrawerProps) {

  return (
    <>
      <Drawer isOpen={isOpen} backdrop='transparent' style={{background:'unset'}} onClose={() => handleClose()}>
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1">{title}</DrawerHeader>
              <Divider/>
              <DrawerBody>
                {content}
                <AlertPopUp
                  title={"Something went wrong"}
                  description={"Invalid email or password. please verify before enter"}
                  isVisible={true}
                  setIsVisible={()=>{}}
                  alertColor="danger"
                />
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={()=>handleClose()}>
                  Close
                </Button>
                <Button color="primary" onPress={()=>handleClose()}>
                  Action
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
