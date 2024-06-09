"use client"
import { Button } from "@/components/ui"
import clsx from "clsx"
import { useState, PropsWithChildren } from "react"

interface Props {
  title: string
}

const ExpandableBlock = ({ children, title }: PropsWithChildren<Props>) => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col gap-2.5 bg-white p-4 font-semibold text-blue-900">
      <div className="flex justify-between gap-2">
        <h2 className="leading-5">{title}</h2>
        {!show && (
          <Button variant="default" onClick={() => setShow(!show)}>
            Показать
          </Button>
        )}
      </div>
      <div
        className={clsx("text-sm leading-4", {
          hidden: !show,
          block: !show,
        })}
      >
        {children}
      </div>
      {show && (
        <div className="flex justify-end">
          <Button variant="default" onClick={() => setShow(!show)}>
            Скрыть
          </Button>
        </div>
      )}
    </div>
  )
}

export default ExpandableBlock
