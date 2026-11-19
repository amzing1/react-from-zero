import type { ReactNode } from "react";
import Card from "./Card";
import ThemeBadge from "./ThemeBadge";

interface UserCardProps {
  user: {
    id: string;
    name: string;
    role: string;
  };
  onEdit: (user: UserCardProps["user"]) => void;
  onDelete: (id: string) => void;
  renderActions: (user: UserCardProps["user"]) => ReactNode;
}

const UserCard = ({ user, onEdit, onDelete, renderActions }: UserCardProps) => {
  return (
    <>
      <Card
        header={
          <div>
            {user.name}
            <ThemeBadge />
          </div>
        }
        footer={
          <div>
            <button onClick={() => onEdit(user)}>edit</button>
            <button onClick={() => onDelete(user.id)}>delete</button>
          </div>
        }
      >
        {renderActions(user)}
      </Card>
    </>
  );
};

export default UserCard;
