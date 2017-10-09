import React from 'react';
import {Link} from 'react-router-dom';




class Cell extends React.Component {

    render () {
        let usersTemplate,
            tableHead,
            tableData;
        tableData = {
            head: {
                col1: "Name",
                col2: "E-mail",
                col3: "Position",
                col4: "Role",
                col5: "Edit",
                col6: "Delete"
            },
            users:  [
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
                    name: "Andrei Krasovskii 8",
                    mail: "andrei.k1251@gmail.com",
                    position: "dev",
                    role: "Front",
                    userID: 4
                }
            ]


        };
        tableHead =  (function(){
            return (
                <tr>
                    <td className="site-users-table__wrapper-table-head-data">
                        Name
                    </td>
                    <td className="site-users-table__wrapper-table-head-data">
                        E-mail
                    </td>
                    <td className="site-users-table__wrapper-table-head-data">
                        Position
                    </td>
                    <td className="site-users-table__wrapper-table-head-data">
                        Role
                    </td>
                    <td className="site-users-table__wrapper-table-head-data turn-center">
                        Edit
                    </td>
                    <td className="site-users-table__wrapper-table-head-data turn-center">
                        Delete
                    </td>
                </tr>
            );
        }())

        usersTemplate = tableData.users.map(function (item) {
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
                    <td className=" site-users-table__wrapper-table-edit-data">
                        <Link to="#" className="site-users-table__wrapper-table-edit-data-link">
                            <i className="material-icons">edit</i>
                        </Link>
                    </td>
                    <td className=" site-users-table__wrapper-table-edit-data">
                        <Link to="#" className="site-users-table__wrapper-table-delete-data-link">
                            <i className="material-icons">delete_forever</i>
                        </Link>
                    </td>
                </tr>
            );
        });

        return (
            <tbody>
                {/*tableHead*/}
                {usersTemplate}
            </tbody>
        );
    }


}

export default Cell;