import React from 'react';
import type { SvgIconProps } from 'helpers/Helpers';

import AddRound from 'assets/icons/add_round.svg';
import Done from 'assets/icons/done.svg';
import ExpandLeft from 'assets/icons/expand_left.svg';
import ExpandRight from 'assets/icons/expand_right.svg';
import ImageBox from 'assets/icons/img_box.svg';
import Message from 'assets/icons/message.svg';
import SignOut from 'assets/icons/sign_out_squre.svg';
import Trash from 'assets/icons/trash.svg';
import User from 'assets/icons/user.svg';
import EyeOpen from 'assets/icons/view.svg';
import EyeClosed from 'assets/icons/view_hide.svg';
import Widget from 'assets/icons/widget.svg';

interface IconProps extends SvgIconProps {
  name:keyof typeof Icons
}

const Icons = {
  'add-round': AddRound,
  done: Done,
  'expand-left': ExpandLeft,
  'expand-right': ExpandRight,
  'image-box': ImageBox,
  message: Message,
  'sign-out': SignOut,
  trash: Trash,
  user: User,
  'eye-hide': EyeClosed,
  eye: EyeOpen,
  widget: Widget,
};

export const Icon = ({ name, ...svgProps }:IconProps) => {
  const IconComponent = Icons[name];
  return <IconComponent {...svgProps} />;
};
