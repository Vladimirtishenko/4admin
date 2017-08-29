import React from 'react';
import {Link} from 'react-router-dom';




class Cell extends React.Component {

    render () {
        let usersTemplate,
            users;
        users = [
            {
                name: "Andrei Krasovskii",
                mail: "andrei.k1251@gmail.com",
                position: "dev",
                role: "Front",
                userID: 1

            },
            {
                name: "Andrei Krasovskii 2",
                mail: "andrei.k1251@gmail.com",
                position: "dev",
                role: "Front",
                userID: 2

            },
            {
                name: "Andrei Krasovskii 3",
                mail: "andrei.k1251@gmail.com",
                position: "dev",
                role: "Front",
                userID: 3

            },
            {
                name: "Andrei Krasovskii 4",
                mail: "andrei.k1251@gmail.com",
                position: "dev",
                role: "Front",
                userID: 4

            }
        ];

        usersTemplate = users.map(function (item) {
            return (
                <tr key={item.userID}>
                    <td className="site-users-table__wrapper-table-data">
                        {item.name}
                    </td>
                    <td className="site-users-table__wrapper-table-data">
                        {item.mail}
                    </td>
                    <td className="site-users-table__wrapper-table-data">
                        {item.position}
                    </td>
                    <td className="site-users-table__wrapper-table-data">
                        {item.role}
                    </td>
                    <td className="site-users-table__wrapper-table-data site-users-table__wrapper-table-edit-data">
                        <Link to="#" className="site-users-table__wrapper-table-edit-data-link">
                            <i className="material-icons">edit</i>
                        </Link>
                        <Link to="#" className="site-users-table__wrapper-table-edit-data-link">
                            <i className="material-icons">delete_forever</i>
                        </Link>
                    </td>
                </tr>
            )
        });


        return (
            <tbody>
                {usersTemplate}
            </tbody>
        );
    }


}

export default Cell;