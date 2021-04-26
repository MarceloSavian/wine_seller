import { GetClientProductsRepository } from '@/data/protocols/db/client/get-client-products'
import { GetProductByFilterRepository } from '@/data/protocols/db/product/get-product-by-filter'
import { Product } from '@/domain/models/product'
import { GetClientWineAdvice } from '@/domain/usecases/client/get-client-wine-advice'

type Ranking = {
  product?: string
  variety?: string
  country?: string
  category?: string
  harvest?: string
  score: number
}

export class DbGetClientWineAdvice implements GetClientWineAdvice {
  constructor (
    private readonly getClientProductsRepository: GetClientProductsRepository,
    private readonly getProductByFilterRepository: GetProductByFilterRepository
  ) {}

  async getWineAdvice (id: string): Promise<Product> {
    const products = await this.getClientProductsRepository.getClientProducts(id)

    const ranking = this.createRanking(products)

    if (ranking.length === 0) return await this.getProductByFilterRepository.getProductByFilter()

    // Pego qual o item/categoria mais pedida pelo cliente
    const higherRanking = ranking.reduce((prev, current) => (prev.score > current.score) ? prev : current)

    // Aqui ele vai pegar o produto da categoria mais pedida pelo cliente
    // No caso onde o score do pais Chile é maior, aqui ele vai filtrar algum produto do chile para retornar
    return await this.getProductByFilterRepository.getProductByFilter(
      higherRanking.product,
      higherRanking.variety,
      higherRanking.country,
      higherRanking.category,
      higherRanking.harvest
    )
  }

  // Criação de um ranking, com os itens mais pedidos pelo cliente
  // Basicamente é dado um score pra cada pedido de um item
  // Por exemplo, se o cliente pediu 3 vezes um vinho do chile, chile terá 3 pontos no score
  // Isso vale para todos os items de um produto, como safra, variedade, menos o valor do produto
  createRanking (products: Product[]): Ranking[] {
    const ranking: Ranking[] = []

    for (const i in products) {
      const product = products[i]

      const isProduct = ranking.findIndex(e => e.product === product.product)

      if (isProduct === -1) ranking.push({ score: 1, product: product.product })
      else ranking[isProduct].score += 1

      const isVariety = ranking.findIndex(e => e.variety === product.variety)

      if (isVariety === -1) ranking.push({ score: 1, variety: product.variety })
      else ranking[isVariety].score += 1

      const isCountry = ranking.findIndex(e => e.country === product.country)

      if (isCountry === -1) ranking.push({ score: 1, country: product.country })
      else ranking[isCountry].score += 1

      const isCategory = ranking.findIndex(e => e.category === product.category)

      if (isCategory === -1) ranking.push({ score: 1, category: product.category })
      else ranking[isCategory].score += 1

      const isHarvest = ranking.findIndex(e => e.harvest === product.harvest)

      if (isHarvest === -1) ranking.push({ score: 1, harvest: product.harvest })
      else ranking[isHarvest].score += 1
    }

    return ranking
  }
}
