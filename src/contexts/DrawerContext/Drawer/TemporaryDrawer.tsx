import * as React from "react";
import { FC, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DrawerContext, { IDrawer } from "../DrawerContext";

export type TAnchor = "top" | "left" | "bottom" | "right";

const TemporaryDrawer: FC<IDrawer> = ({ content, anchor }) => {
  const { closeDrawer, isOpenedDrawer } = useContext(DrawerContext);

  return (
    <div>
      <React.Fragment key={anchor}>
        <Drawer anchor={anchor} open={isOpenedDrawer} onClose={closeDrawer}>
          <Box
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
          >
            {content}
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;
