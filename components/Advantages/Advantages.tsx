import { AdvantagesItem } from "./AdvantagesItem/Advantages";
import { AdvantagesProps } from "./Advantages.props";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => (
    <>
        {advantages?.length && advantages.map((advantItem) => (
            <AdvantagesItem key={advantItem._id} advantItem={advantItem} />
        ))}
    </>
);
