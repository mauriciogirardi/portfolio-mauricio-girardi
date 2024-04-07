'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Companies } from './companies'
import { Projects } from './projects'

export function ProjectList() {
  return (
    <Tabs defaultValue="companies" className="mt-10 w-full max-w-[1000px]">
      <TabsList className="grid w-full grid-cols-2 px-1">
        <TabsTrigger value="companies">Companies</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="companies">
        <Companies />
      </TabsContent>
      <TabsContent value="projects">
        <Projects />
      </TabsContent>
    </Tabs>
  )
}
