import Select from "react-select";

export type ControlsProps = {
  setSortingDetails: (param: any, isSortBy: bool) => object;
};

const Controls = ({setSortingDetails}: ControlsProps) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
            options={fieldOptions}
            inputId="sort-field"
            className="input"
            onChange={e => setSortingDetails(e.value, true)}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={e => setSortingDetails(e.value, false)}
        />
      </div>
    </div>
  );
};

export default Controls;
