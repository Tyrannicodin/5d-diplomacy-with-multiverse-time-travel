import colours from '../../../utils/colours';
import css from './expandButton.module.scss'

type ExpandButtonProps = {
  colour: string;
  isExpanded: boolean;
  toggleExpand: () => void;
};

const ExpandButton = ({ colour, isExpanded, toggleExpand }: ExpandButtonProps) => (
  <button
    type="button"
    onClick={toggleExpand}
    className={css.container}
    style={{ backgroundColor: colour }}
    aria-label="Expand item"
  >
    <div
      className={`absolute h-0.5 w-[5px] top-1.5 left-[3px] rounded ${isExpanded ? '-rotate-45' : 'rotate-45'}`}
      style={{ backgroundColor: colours.iconForeground }}
    />
    <div
      className={`absolute h-0.5 w-[5px] top-1.5 right-[3px] rounded ${isExpanded ? 'rotate-45' : '-rotate-45'}`}
      style={{ backgroundColor: colours.iconForeground }}
    />
  </button>
);

export default ExpandButton;
