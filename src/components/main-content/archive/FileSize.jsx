const FileSize = ({ fileSize, loading }) => {
  if (loading) {
    return (
      <div className="tooltip-text">
        <p>در حال بارگذاری...</p>
      </div>
    );
  }

  if (fileSize === null || fileSize === undefined) {
    return (
      <div className="tooltip-text">
        <p>سایز نامشخص</p>
      </div>
    );
  }

  return (
    <div className="tooltip-text">
      <p>{fileSize.toFixed(2)} مگابایت</p>
    </div>
  );
};

export default FileSize;
