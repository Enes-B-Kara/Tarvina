// components/form/InputField.js
const InputField = ({ label, name, type, required }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input type={type} name={name} id={name} required={required} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
    </div>
  );
};

export default InputField;
