"use client"

const stats = [
    {
        number: "25",
        description: "Projects Completed",
    },
    {
        number: "6",
        description: "Technologies mastered",
    },
    {
        number: "15",
        description: "Happy Clients",
    },
    {
        number: "3+",
        description: "Years of Experience",
    },
];

const Stats = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center mb-4">Stats</h2>
            <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center gap-2">
                    <span className="text-accent">10+</span>
                    <span>Projects Completed</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-accent">5+</span>
                    <span>Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-accent">3+</span>
                    <span>Years of Experience</span>
                </div>
            </div>
        </div>
    );
}

export default Stats;