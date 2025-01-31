interface FilterBarProps {
    onFilterChange: (filter: string) => void;
    onSortChange: (sort: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange, onSortChange }) => {
    return (
        <div className="flex gap-4 mb-4">
            <select className="border p-2" onChange={(e) => onFilterChange(e.target.value)}>
                <option value="All">All</option>
                <option value="Luxury Firm">Luxury Firm</option>
                <option value="Plush Soft">Plush Soft</option>
                <option value="Firm">Firm</option>
            </select>

            <select className="border p-2" onChange={(e) => onSortChange(e.target.value)}>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
            </select>
        </div>
    );
};

export default FilterBar;