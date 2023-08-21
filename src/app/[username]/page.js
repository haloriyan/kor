const Dashboard = ({ params }) => {
    const { username } = params;
    return (
        <>
            home : {username}
        </>
    )
}

export default Dashboard;