import { useEffect, useRef, useMemo } from "react";
import { OrgChart } from "d3-org-chart";

interface NodeData {
  id: number;
  parentId: number | null;
  name: string;
  avatar: string;
  position: string;
}

interface ExtendedNode {
  width: number;
  height: number;
  data: NodeData;
}

export default function App() {
  const chartRef = useRef<HTMLDivElement | null>(null);

  const dataMemo = useMemo(
    () => [
      {
        id: 1,
        parentId: null,
        name: "Gopal Prajapati",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        position: "CEO",
      },
      {
        id: 2,
        parentId: 1,
        name: "Anita Sharma",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        position: "CTO",
      },
      {
        id: 3,
        parentId: 1,
        name: "Vikram Rao",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        position: "CFO",
      },
      {
        id: 4,
        parentId: 1,
        name: "Mahesh Patel",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        position: "COO",
      },
      {
        id: 5,
        parentId: 2,
        name: "Sonal Gupta",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        position: "Engineering Manager",
      },
      {
        id: 6,
        parentId: 2,
        name: "Ramesh Yadav",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        position: "Senior Developer",
      },
      {
        id: 7,
        parentId: 2,
        name: "Divya Jain",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        position: "QA Lead",
      },
      {
        id: 8,
        parentId: 3,
        name: "Priya Verma",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        position: "Senior Accountant",
      },
      {
        id: 9,
        parentId: 3,
        name: "Arjun Desai",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        position: "Finance Manager",
      },
      {
        id: 10,
        parentId: 4,
        name: "Kavita Nair",
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
        position: "Operations Manager",
      },
      {
        id: 11,
        parentId: 4,
        name: "Suresh Kumar",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        position: "Logistics Head",
      },
      {
        id: 12,
        parentId: 5,
        name: "Harsh Pandey",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        position: "Frontend Developer",
      },
      {
        id: 13,
        parentId: 5,
        name: "Meera Singh",
        avatar: "https://randomuser.me/api/portraits/women/13.jpg",
        position: "Backend Developer",
      },
      {
        id: 14,
        parentId: 7,
        name: "Alka Reddy",
        avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        position: "QA Engineer",
      },
      {
        id: 15,
        parentId: 7,
        name: "Deepak Joshi",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        position: "Automation Tester",
      },
      {
        id: 16,
        parentId: 9,
        name: "Tanya Kapoor",
        avatar: "https://randomuser.me/api/portraits/women/16.jpg",
        position: "Junior Analyst",
      },
      {
        id: 17,
        parentId: 9,
        name: "Gopal Sharma",
        avatar: "https://randomuser.me/api/portraits/men/17.jpg",
        position: "Audit Specialist",
      },
      {
        id: 18,
        parentId: 10,
        name: "Sneha Pillai",
        avatar: "https://randomuser.me/api/portraits/women/18.jpg",
        position: "Ops Coordinator",
      },
      {
        id: 19,
        parentId: 10,
        name: "Ravi Chowdhury",
        avatar: "https://randomuser.me/api/portraits/men/19.jpg",
        position: "Inventory Specialist",
      },
      {
        id: 20,
        parentId: 12,
        name: "Nikhil Kumar",
        avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        position: "Frontend Intern",
      },
      {
        id: 21,
        parentId: 14,
        name: "Anjali Dutta",
        avatar: "https://randomuser.me/api/portraits/women/21.jpg",
        position: "QA Intern",
      },
    ],
    []
  );

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new OrgChart()
      // @ts-expect-error - d3-org-chart accepts HTMLElement but types expect string
      .container(chartRef.current)
      .data(dataMemo)
      .nodeHeight(() => 85 + 25)
      .nodeWidth(() => 220 + 2)
      .childrenMargin(() => 50)
      .compactMarginBetween(() => 35)
      .compactMarginPair(() => 30)
      .neighbourMargin(() => 20)
      .nodeContent(function (d, _i, _arr, _state) {
        const color = "#FFFFFF";
        const imageDiffVert = 25 + 2;
        const node = d as unknown as ExtendedNode;

        return `
          <div style='width:${node.width}px;height:${node.height}px;padding-top:${imageDiffVert - 2}px;padding-left:1px;padding-right:1px'>
            <div style="font-family: 'Inter', sans-serif;background-color:${color};  margin-left:-1px;width:${node.width - 2}px;height:${node.height - imageDiffVert}px;border-radius:10px;border: 1px solid #E4E2E9">
              <div style="display:flex;justify-content:flex-end;margin-top:5px;margin-right:8px">#${node.data.id}</div>
              <div style="background-color:${color};margin-top:${-imageDiffVert - 20}px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;" ></div>
              <div style="margin-top:${-imageDiffVert - 20}px;">   <img src="${node.data.avatar}" style="margin-left:${20}px;border-radius:100px;width:40px;height:40px;" /></div>
              <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:10px">  ${node.data.name} </div>
              <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;"> ${node.data.position} </div>
            </div>
          </div>
        `;
      });
    chart.render();
  }, [dataMemo]);

  return (
    <div
      ref={chartRef}
      style={{
        width: "100%",
        height: "900px",
        overflow: "auto",
        padding: 20,
        background: "#f8f9fb",
      }}
    />
  );
}
