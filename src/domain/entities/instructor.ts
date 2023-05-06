import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

interface IntructorProps {
  name: string
}

export class Intructor extends Entity<IntructorProps> {
  static create(props: IntructorProps, id?: UniqueEntityId) {
    const instructor = new Intructor(props, id)

    return instructor
  }
}