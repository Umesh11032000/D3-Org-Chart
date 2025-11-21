import type { ExtendedNode } from "../types";

interface OrgChartNodeProps {
  node: ExtendedNode;
}

export const OrgChartNode = ({ node }: OrgChartNodeProps) => {
  const color = "#FFFFFF";
  const imageDiffVert = 25 + 2;

  return (
    <div
      style={{
        width: `${node.width}px`,
        height: `${node.height}px`,
        paddingTop: `${imageDiffVert - 2}px`,
        paddingLeft: "1px",
        paddingRight: "1px",
      }}
    >
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          backgroundColor: color,
          marginLeft: "-1px",
          width: `${node.width - 2}px`,
          height: `${node.height - imageDiffVert}px`,
          borderRadius: "10px",
          border: "1px solid #E4E2E9",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "5px",
            marginRight: "8px",
          }}
        >
          #{node.data.id}
        </div>
        <div
          style={{
            backgroundColor: color,
            marginTop: `${-imageDiffVert - 20}px`,
            marginLeft: "15px",
            borderRadius: "100px",
            width: "50px",
            height: "50px",
          }}
        />
        <div style={{ marginTop: `${-imageDiffVert - 20}px` }}>
          <img
            src={node.data.avatar}
            alt={node.data.name}
            style={{
              marginLeft: "20px",
              borderRadius: "100px",
              width: "40px",
              height: "40px",
            }}
          />
        </div>
        <div
          style={{
            fontSize: "15px",
            color: "#08011E",
            marginLeft: "20px",
            marginTop: "10px",
          }}
        >
          {node.data.name}
        </div>
        <div
          style={{
            color: "#716E7B",
            marginLeft: "20px",
            marginTop: "3px",
            fontSize: "10px",
          }}
        >
          {node.data.position}
        </div>
      </div>
    </div>
  );
};

